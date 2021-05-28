package com.andrelake.projectsales.repositories;

import com.andrelake.projectsales.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
