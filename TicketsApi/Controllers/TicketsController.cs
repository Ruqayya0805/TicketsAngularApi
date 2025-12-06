using Microsoft.AspNetCore.Mvc;
using TicketsAPI.Models;

namespace TicketsAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTickets()
        {
            var tickets = new List<Ticket>
            {
                new Ticket
                {
                    Id = 1,
                    ShortDescription = "Login Issue",
                    Description = "Users unable to login with correct credentials",
                    CreatedDate = new DateTime(2024, 6, 15),
                    Severity = "High",
                    TargetDate = new DateTime(2024, 6, 20),
                    Status = "Open"
                },
                new Ticket
                {
                    Id = 2,
                    ShortDescription = "Page Load Slow",
                    Description = "Dashboard takes more than 5 seconds to load",
                    CreatedDate = new DateTime(2024, 7, 10),
                    Severity = "Medium",
                    TargetDate = new DateTime(2024, 7, 18),
                    Status = "Open"
                },
                new Ticket
                {
                    Id = 3,
                    ShortDescription = "Email Notification",
                    Description = "Email notifications not being sent to users",
                    CreatedDate = new DateTime(2024, 8, 5),
                    Severity = "Low",
                    TargetDate = new DateTime(2024, 8, 15),
                    Status = "Closed"
                },
                new Ticket
                {
                    Id = 4,
                    ShortDescription = "Database Connection",
                    Description = "Intermittent database connection timeout errors",
                    CreatedDate = new DateTime(2024, 9, 1),
                    Severity = "High",
                    TargetDate = new DateTime(2024, 9, 3),
                    Status = "Open"
                }
            };

            return Ok(tickets);
        }
    }
}