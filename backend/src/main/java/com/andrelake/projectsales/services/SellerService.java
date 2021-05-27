package com.andrelake.projectsales.services;

import com.andrelake.projectsales.dto.SellerDTO;
import com.andrelake.projectsales.entities.Seller;
import com.andrelake.projectsales.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerService {

    @Autowired
    private SellerRepository repository;

    public List<SellerDTO> findAll() {
        List<Seller> result = repository.findAll();

        return result
                .stream()
                .map(seller -> new SellerDTO(seller))
                .collect(Collectors.toList());
    }
}
