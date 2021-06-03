package com.andrelake.projectsales.dto;

import com.andrelake.projectsales.entities.Seller;

import java.io.Serializable;

public class SaleSuccessDTO implements Serializable {

    private String sellerName;
    private Long visited;
    private Long deals;

    public SaleSuccessDTO() {
    }

    public SaleSuccessDTO(Seller seller, Long visited, Long deals) {
        this.sellerName = seller.getName();
        this.visited = visited;
        this.deals = deals;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public Long getVisited() {
        return visited;
    }

    public void setVisited(Long visited) {
        this.visited = visited;
    }

    public Long getDeals() {
        return deals;
    }

    public void setDeals(Long deals) {
        this.deals = deals;
    }

    @Override
    public String toString() {
        return "SaleSuccessDTO{" +
                "sellerName='" + sellerName + '\'' +
                ", visited=" + visited +
                ", deals=" + deals +
                '}';
    }
}
