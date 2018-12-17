package com.pojo;

import java.util.Date;

public class Menu {
    private Integer id;

    private String url;

    private String name;

    private Date creattime;

    private Integer creatuserid;

    private String path;

    private Integer state;

    private Integer prentnode;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url == null ? null : url.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Date getCreattime() {
        return creattime;
    }

    public void setCreattime(Date creattime) {
        this.creattime = creattime;
    }

    public Integer getCreatuserid() {
        return creatuserid;
    }

    public void setCreatuserid(Integer creatuserid) {
        this.creatuserid = creatuserid;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path == null ? null : path.trim();
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public Integer getPrentnode() {
        return prentnode;
    }

    public void setPrentnode(Integer prentnode) {
        this.prentnode = prentnode;
    }
}