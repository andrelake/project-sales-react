package com.andrelake.projectsales.repositories;

import com.andrelake.projectsales.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {
}
