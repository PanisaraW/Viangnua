using System.ComponentModel.DataAnnotations;

namespace Viangnua.Web.Data.Models.Entities.Lookup;

public class GenderLookup
{
    [Key]
    public byte Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Name { get; set; }
}