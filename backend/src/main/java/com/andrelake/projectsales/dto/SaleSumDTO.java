package com.andrelake.projectsales.dto;

import com.andrelake.projectsales.entities.Seller;

import java.io.Serializable;

public class SaleSumDTO implements Serializable {

    private String sellerName;
    private Double sum;

    public SaleSumDTO() {
    }

    public SaleSumDTO(Seller seller, Double sum) {
        this.sellerName = seller.getName();
        this.sum = sum;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public Double getSum() {
        return sum;
    }

    public void setSum(Double sum) {
        this.sum = sum;
    }

    @Override
    public String toString() {
        return "SaleSumDTO{" +
                "sellerName='" + sellerName + '\'' +
                ", sum=" + sum +
                '}';
    }
}
