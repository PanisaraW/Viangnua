using System.ComponentModel.DataAnnotations;

namespace Viangnua.Web.Data.Models.Lookup;

public class QualityLookup
{
    [Key]
    public byte Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Name { get; set; }
}