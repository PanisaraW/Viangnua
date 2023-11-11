using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Viangnua.Web.Data.Models.Entities.Lookup;

namespace Viangnua.Web.Data.Models.Entities.Cloth;

public class Cloth
{
    [Key] // Id as Primary Key
    public int Id { get; set; }

    [Required]
    [MaxLength(255)]
    public string Name { get; set; }

    [Required]
    [ForeignKey(nameof(Color))]
    public byte ColorId { get; set; }
    
    [Required]
    public byte QualityId { get; set; }
    
    [Required]
    public byte GenderId { get; set; }
    
    [Required]
    public bool IsAdult { get; set; }
    
    //TODO: wyrupa: make lookuptable which can be changed by mom
    [Required]
    public string Size { get; set; }
    
    public ColorLookup Color { get; set; }
    
    public QualityLookup Quality { get; set; }
    
    public GenderLookup Gender { get; set; }
}