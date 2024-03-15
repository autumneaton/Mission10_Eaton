using System.ComponentModel.DataAnnotations;

namespace APIThings.Data
{
    public class Team
    {
        [Key]
        [Required]
        public int TeamID { get; set; }
        [Required]
        public required string TeamName { get; set; } 
        public int? CaptainID { get; set; }
    }
}
