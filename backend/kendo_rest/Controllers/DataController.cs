using kendo_rest.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace kendo_rest.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        [HttpPost(Name = "PostData")]
        public IActionResult Get()
        {
            var students = new List<Student>
            {
                new Student
                {
                    Name = "Alice",
                    Age = 20,
                    Hobbies = new List<string> { "reading", "swimming", "coding" }
                },
                new Student
                {
                    Name = "Bob",
                    Age = 22,
                    Hobbies = new List<string> { "painting", "dancing", "singing" }
                }
            };

            var data = new { students };

            return Ok(data);
        }
    }
}
