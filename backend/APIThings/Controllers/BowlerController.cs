using APIThings.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIThings.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;
        public BowlerController(IBowlerRepository temp) {
            _bowlerRepository = temp;
        }

        [HttpGet("Bowler")]
        public IEnumerable<Bowler> GetBowlers()
        {
            var bowlerData = _bowlerRepository.Bowlers.ToArray();
            return bowlerData;
        }

        [HttpGet("Team")]
        public IEnumerable<Team> GetTeams()
        {
            var teamData = _bowlerRepository.Teams.ToArray();
            return teamData;
        }
    }
}
