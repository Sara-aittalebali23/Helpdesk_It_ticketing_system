package com.helpdesk.backend.controller;

import com.helpdesk.backend.model.Ticket;
import com.helpdesk.backend.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class DashboardController {
    @Autowired
    private DashboardService dashboardService;

//    @GetMapping("/api/getAllTypeOfAgents")
//    private

    @GetMapping("/api/admin/tickets-by-status")
    public ResponseEntity<Map<String, Long>> getTicketsByStatus() {
        Map<String, Long> statusCounts = dashboardService.getTicketCountByStatus();
        return ResponseEntity.ok(statusCounts);
    }

    @GetMapping("/api/admin/tickets-by-priority")
    public ResponseEntity<Map<String,Long>> getTicketsByPriority(){
        Map<String,Long> PriorityCounts = dashboardService.getTicketCountByPriority();
        return ResponseEntity.ok(PriorityCounts);
    }
    @GetMapping("/api/admin/active-tickets")
    public ResponseEntity<List<Ticket>> getActiveTickets(){
        List<Ticket> activeTickets = dashboardService.getActiveTickets();
        return ResponseEntity.ok(activeTickets);
    }
}
