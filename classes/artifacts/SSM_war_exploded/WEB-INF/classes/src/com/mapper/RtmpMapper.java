package com.mapper;

import com.pojo.Rtmp;
import com.pojo.RtmpExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface RtmpMapper {
    int countByExample(RtmpExample example);

    int deleteByExample(RtmpExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Rtmp record);

    int insertSelective(Rtmp record);

    List<Rtmp> selectByExample(RtmpExample example);

    Rtmp selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Rtmp record, @Param("example") RtmpExample example);

    int updateByExample(@Param("record") Rtmp record, @Param("example") RtmpExample example);

    int updateByPrimaryKeySelective(Rtmp record);

    int updateByPrimaryKey(Rtmp record);
}