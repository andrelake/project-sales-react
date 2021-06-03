package com.andrelake.projectsales.services;

import com.andrelake.projectsales.dto.SaleDTO;
import com.andrelake.projectsales.dto.SaleSuccessDTO;
import com.andrelake.projectsales.dto.SaleSumDTO;
import com.andrelake.projectsales.entities.Sale;
import com.andrelake.projectsales.repositories.SaleRepository;
import com.andrelake.projectsales.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable) {
        sellerRepository.findAll();  //for cache
        Page<Sale> result = repository.findAll(pageable);

        return result.map(sale -> new SaleDTO(sale));
    }

    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupBySeller() {
        return repository.amountGroupBySeller();
    }

    @Transactional(readOnly = true)
    public List<SaleSuccessDTO> successTaxGroupBySeller() {
        return repository.successTaxGroupBySeller();
    }
}
