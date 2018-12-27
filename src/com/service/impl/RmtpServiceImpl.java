package com.service.impl;

import com.mapper.RtmpMapper;
import com.pojo.Rtmp;
import com.pojo.RtmpExample;
import com.service.RmtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("RmtpService")
public class RmtpServiceImpl implements RmtpService {

    @Autowired
    private RtmpMapper rtmpMapper;

    @Override
    public List<Rtmp> findAll() {
        return rtmpMapper.selectByExample(new RtmpExample());
    }

    @Override
    public int insert(Rtmp rtmp) {
        return rtmpMapper.insert(rtmp);
    }


}
