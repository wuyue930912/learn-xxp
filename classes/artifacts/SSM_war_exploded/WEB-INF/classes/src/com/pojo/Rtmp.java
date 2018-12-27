package com.pojo;

import java.util.Date;

public class Rtmp {
    private Integer id;

    private Integer userid;

    private String livertmp;

    private String livename;

    private String livetitle;

    private String livepage;

    private String liveimage;

    private Integer livestate;

    private String red5url;

    private Date createtime;

    private String bz;

    private Integer top;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getLivertmp() {
        return livertmp;
    }

    public void setLivertmp(String livertmp) {
        this.livertmp = livertmp == null ? null : livertmp.trim();
    }

    public String getLivename() {
        return livename;
    }

    public void setLivename(String livename) {
        this.livename = livename == null ? null : livename.trim();
    }

    public String getLivetitle() {
        return livetitle;
    }

    public void setLivetitle(String livetitle) {
        this.livetitle = livetitle == null ? null : livetitle.trim();
    }

    public String getLivepage() {
        return livepage;
    }

    public void setLivepage(String livepage) {
        this.livepage = livepage == null ? null : livepage.trim();
    }

    public String getLiveimage() {
        return liveimage;
    }

    public void setLiveimage(String liveimage) {
        this.liveimage = liveimage == null ? null : liveimage.trim();
    }

    public Integer getLivestate() {
        return livestate;
    }

    public void setLivestate(Integer livestate) {
        this.livestate = livestate;
    }

    public String getRed5url() {
        return red5url;
    }

    public void setRed5url(String red5url) {
        this.red5url = red5url == null ? null : red5url.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public String getBz() {
        return bz;
    }

    public void setBz(String bz) {
        this.bz = bz == null ? null : bz.trim();
    }

    public Integer getTop() {
        return top;
    }

    public void setTop(Integer top) {
        this.top = top;
    }
}