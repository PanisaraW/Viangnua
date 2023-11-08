using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;

namespace Viangnua.Web.Data.Models.ClothView;

public class ClothView
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
    
    [Required]
    public string Size { get; set; }
}