package com.leonardo.task_creator.repository;

import com.leonardo.task_creator.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {

    @Query(" select t from Tarefa t " +
            " join fetch t.categoria " +
            " join fetch t.status " +
            " where t.status.id = ?1 " +
            " order by t.id asc ")
    List<Tarefa> findWithStatusFilter(Long idStatus);

    @Query(" select t from Tarefa t " +
            " join fetch t.categoria " +
            " join fetch t.status " +
            " where t.categoria.id = ?1 " +
            " order by t.id asc ")
    List<Tarefa> findWithCategoriaFilter(Long idCategoria);

    List<Tarefa> findAllByOrderById();
}
