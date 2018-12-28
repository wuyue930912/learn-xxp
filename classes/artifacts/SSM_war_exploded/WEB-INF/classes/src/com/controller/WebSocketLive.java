package com.controller;

import com.pojo.User;
import com.util.GetHttpSessionConfigurator;

import javax.servlet.http.HttpSession;
import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArraySet;

/**
 * @ServerEndpoint 注解是一个类层次的注解，它的功能主要是将目前的类定义成一个websocket服务器端,
 * 注解的值将被用于监听用户连接的终端访问URL地址,客户端可以通过这个URL来连接到WebSocket服务器端
 */
@ServerEndpoint(value="/websocketLive/{ro_user}",configurator=GetHttpSessionConfigurator.class)
public class WebSocketLive {
    //静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
    private static int onlineCount = 0;
    
    //concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。若要实现服务端与单一客户端通信的话，可以使用Map来存放，其中Key可以为用户标识

    //与某个客户端的连接会话，需要通过它来给客户端发送数据
    private Session session;

    private static final Map<Integer, CopyOnWriteArraySet<WebSocketLive>> rooms = new HashMap<>();

	private HttpSession httpSession;

    private Integer userId;

    private Integer roomId;

    /**
     * 连接建立成功调用的方法
     * @param session  可选的参数。session为与某个客户端的连接会话，需要通过它来给客户端发送数据
     */
    @OnOpen
    public void onOpen(@PathParam(value = "ro_user") String ro_user, Session session, EndpointConfig config){
    	this.httpSession = (HttpSession) config.getUserProperties().get(HttpSession.class.getName());
    	User user = (User) httpSession.getAttribute("loginUser");
        this.session = session;
        String[] param = ro_user.split("-");
        this.roomId = Integer.parseInt(param[0]);
        this.userId = Integer.parseInt(param[1]);
        CopyOnWriteArraySet<WebSocketLive> friends = rooms.get(roomId);
        if (friends == null) {
            synchronized (rooms) {
                if (!rooms.containsKey(roomId)) {
                    friends = new CopyOnWriteArraySet<>();
                    rooms.put(roomId, friends);
                }
            }
        }
        friends.add(this);
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose(){
        CopyOnWriteArraySet<WebSocketLive> friends = rooms.get(roomId);
        if (friends != null) {
            friends.remove(this);
        }

    }

    /**
     * 收到客户端消息后调用的方法
     * @param message 客户端发送过来的消息
     * @param session 可选的参数
     */
    @OnMessage
    public void onMessage(String message, Session session) {
        //新建线程来保存用户聊天信息
//        new Thread(new Runnable() {
//            @Override
//            public void run() {
//                service.save(new User_Message(0, userId, message, roomId, new Date()));
//            }
//        }).start();

        CopyOnWriteArraySet<WebSocketLive> friends = rooms.get(roomId);
        if (friends != null) {
            for (WebSocketLive item : friends) {
                item.session.getAsyncRemote().sendText(message);
            }
        }
    }

    /**
     * 发生错误时调用
     * @param session
     * @param error
     */
    @OnError
    public void onError(Session session, Throwable error){
        System.out.println("发生错误");
        error.printStackTrace();
    }

    /**
     * 这个方法与上面几个方法不一样。没有用注解，是根据自己需要添加的方法。
     * @param message
     * @throws IOException
     */
    public void sendMessage(String message) throws IOException{
    	SimpleDateFormat format = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
        this.session.getBasicRemote().sendText(format.format(new Date()) + " : "+message);
        //this.session.getAsyncRemote().sendText(message);
    }

    public static synchronized int getOnlineCount() {
        return onlineCount;
    }

    public static synchronized void addOnlineCount() {
        WebSocketLive.onlineCount++;
    }

    public static synchronized void subOnlineCount() {
        WebSocketLive.onlineCount--;
    }
}