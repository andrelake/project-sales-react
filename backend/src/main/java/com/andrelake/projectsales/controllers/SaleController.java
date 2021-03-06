package com.andrelake.projectsales.controllers;

import com.andrelake.projectsales.dto.SaleDTO;
import com.andrelake.projectsales.dto.SaleSuccessDTO;
import com.andrelake.projectsales.dto.SaleSumDTO;
import com.andrelake.projectsales.dto.SellerDTO;
import com.andrelake.projectsales.services.SaleService;
import com.andrelake.projectsales.services.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

    @Autowired
    private SaleService service;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
        Page<SaleDTO> list = service.findAll(pageable);

        return ResponseEntity.ok(list);
    }

    @GetMapping(value = "/amount-by-seller")
    public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller() {
        List<SaleSumDTO> list = service.amountGroupBySeller();
        return ResponseEntity.ok(list);
    }

    @GetMapping(value = "/success-tax-by-seller")
    public ResponseEntity<List<SaleSuccessDTO>> successTaxGroupBySeller() {
        List<SaleSuccessDTO> list = service.successTaxGroupBySeller();
        return ResponseEntity.ok(list);
    }
}
