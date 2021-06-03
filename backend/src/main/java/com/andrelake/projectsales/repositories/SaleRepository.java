package com.andrelake.projectsales.repositories;

import com.andrelake.projectsales.dto.SaleSuccessDTO;
import com.andrelake.projectsales.dto.SaleSumDTO;
import com.andrelake.projectsales.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query("SELECT new com.andrelake.projectsales.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) " +
            "FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSumDTO> amountGroupBySeller();

    @Query("SELECT new com.andrelake.projectsales.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) " +
            "FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSuccessDTO> successTaxGroupBySeller();
}
