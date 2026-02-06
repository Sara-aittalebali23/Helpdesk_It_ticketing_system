package com.helpdesk.backend.service;


import com.helpdesk.backend.model.Priority;
import com.helpdesk.backend.model.Status;
import com.helpdesk.backend.model.Ticket;
import com.helpdesk.backend.repository.DashboardRepository;
import com.helpdesk.backend.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DashboardService  {
    @Autowired
    private DashboardRepository dashboardRepository;

    @Autowired
    private TicketRepository ticketRepository;

//    this function is for returning the number of ticket by status
    public Map<String, Long> getTicketCountByStatus() {
        // Call repository inside method
        List<Object[]> results = dashboardRepository.countTicketsByStatus();
        Map<String, Long> statusCountMap = initializeStatusCountMap();

        // Process results inside method
        for (Object[] result : results) {
            if (result != null && result.length >= 2) {
                String status = ((Status) result[0]).name();  // ✅ result[0] not results[0]
                Long count = (Long) result[1];                // ✅ result[1] not results[1]
                statusCountMap.put(status, count);
            }
        }

        return statusCountMap;
    }
    private Map<String, Long> initializeStatusCountMap() {
        return Arrays.stream(Status.values())
                .collect(Collectors.toMap(
                        Status::name,
                        status -> 0L
                ));
    }
//    this function is for returning the number of ticket by priority
    public Map<String, Long> getTicketCountByPriority() {
        // Call repository inside method
        List<Object[]> results = dashboardRepository.countTicketsByPriority();
        Map<String, Long> priorityCountMap = initializePriorityCountMap();

        // Process results inside method
        for (Object[] result : results) {
            if (result != null && result.length >= 2) {
                String priority = ((Priority) result[0]).name();  // ✅ result[0] not results[0]
                Long count = (Long) result[1];                // ✅ result[1] not results[1]
                priorityCountMap.put(priority, count);
            }
        }

        return priorityCountMap;
    }

    private Map<String, Long> initializePriorityCountMap() {
        return Arrays.stream(Priority.values())
                .collect(Collectors.toMap(
                        Priority::name,
                        priority -> 0L
                ));
    }

//    this function is for returning the active tickets (that are not solved or closed )
    public List<Ticket> getActiveTickets(){
        List<Ticket> activeTickets = dashboardRepository.getActiveTickets();
        return activeTickets ;
    }
}
