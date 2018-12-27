package com.service;

import com.pojo.Rtmp;

import java.util.List;

public interface RmtpService {

    List<Rtmp> findAll();

    int insert(Rtmp rtmp);


}
