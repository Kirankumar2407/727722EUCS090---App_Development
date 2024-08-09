package com.example.demo.repository;

import com.example.demo.model.Admin;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

    public List<Admin> findByEmailIdAndPassword(String em,String pass);

    public Admin getByEmailId(String email);

}
