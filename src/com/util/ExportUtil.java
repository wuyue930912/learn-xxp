package com.util;

import com.pojo.User;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.util.CellRangeAddress;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.List;

public class ExportUtil {
    public static HSSFWorkbook exportData(List list, String sheetName,Object o) {

        Field[] fields = o.getClass().getDeclaredFields();

        // 创建工作空间
        HSSFWorkbook wb = new HSSFWorkbook();
        // 创建表
        HSSFSheet sheet = wb.createSheet(sheetName);
        sheet.setDefaultColumnWidth(20);
        sheet.setDefaultRowHeightInPoints(20);
        // 创建行
        HSSFRow row = sheet.createRow((int) 0);

        // 生成一个样式
        HSSFCellStyle style = wb.createCellStyle();
        style.setAlignment(HorizontalAlignment.CENTER);// 水平居中
        style.setVerticalAlignment(VerticalAlignment.CENTER);// 垂直居中
        sheet.addMergedRegion(new CellRangeAddress(0,0,0,fields.length-1));

        // 背景色
        style.setFillForegroundColor(HSSFColor.HSSFColorPredefined.YELLOW.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setFillBackgroundColor(HSSFColor.HSSFColorPredefined.YELLOW.getIndex());

        // 设置边框
//        style.setBorderBottom(BorderStyle.THIN);
//        style.setBorderLeft(BorderStyle.THIN);
//        style.setBorderRight(BorderStyle.THIN);
//        style.setBorderTop(BorderStyle.THIN);

        // 生成一个字体
        HSSFFont font = wb.createFont();
        font.setFontHeightInPoints((short) 10);
        font.setColor(HSSFColor.HSSFColorPredefined.RED.getIndex());
        font.setBold(true);
        font.setFontName("宋体");

        // 把字体 应用到当前样式
        style.setFont(font);

        // 添加表头数据
        HSSFCell cell = row.createCell(0);
        cell.setCellValue(sheetName);
        cell.setCellStyle(style);

        HSSFCellStyle style2 = wb.createCellStyle();
        style2.setAlignment(HSSFCellStyle.ALIGN_CENTER);// 水平居中
        style2.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);

        // 设置列名
        HSSFRow row1 = sheet.createRow((int) 1);
        for (int i = 0; i < fields.length; i++){
            HSSFCell cell2 = row1.createCell(i);
            cell2.setCellValue(fields[i].getName());
            cell2.setCellStyle(style2);
        }

        // 添加单元格数据
        for (int i = 0; i < list.size(); i++) {
            HSSFRow row2 = sheet.createRow(i + 2);
            for (int k = 0; k < fields.length; k++){
                String name = getFieldValueByName(fields[k].getName(),list.get(i));
                row2.createCell(k).setCellValue(name);
            }
            for (int j = 0; j < fields.length; j++){
                HSSFCell cell4 = row2.getCell(j);
                cell4.setCellStyle(style2);
            }
        }

        HSSFRow row5 = sheet.createRow(list.size()+2);
        HSSFCell cellLast = row5.createCell(0);
        cellLast.setCellValue("xxxxxxx公司，"+sheetName);
        cellLast.setCellStyle(style);
        sheet.addMergedRegion(new CellRangeAddress(list.size()+2,list.size()+2,0,fields.length-1));

        return wb;
    }

    private static String getFieldValueByName(String fieldName, Object o) {
        try {
            String firstLetter = fieldName.substring(0, 1).toUpperCase();
            String getter = "get" + firstLetter + fieldName.substring(1);
            Method method = o.getClass().getMethod(getter, new Class[] {});
            Object value = method.invoke(o, new Object[] {});
            return value.toString();
        } catch (Exception e) {
            return "";
        }
    }
}
