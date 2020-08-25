package br.com.squadratecnologia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.squadratecnologia.model.Sistema;

@Repository
public interface SistemaRepository extends JpaRepository<Sistema, Long>{

}
