package com.helpdesk.backend.repository;

import com.helpdesk.backend.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DashboardRepository extends JpaRepository<Ticket,Long> {
    @Query("select t.status , count(t) from Ticket t group by t.status")
    List<Object[]> countTicketsByStatus();

    @Query("select t.priority , count(t) from Ticket t group by t.priority")
    List<Object[]> countTicketsByPriority();

    @Query("SELECT t FROM Ticket t WHERE t.status != 'RESOLVED' AND t.status != 'CLOSED'")
    List<Ticket> getActiveTickets();
}
