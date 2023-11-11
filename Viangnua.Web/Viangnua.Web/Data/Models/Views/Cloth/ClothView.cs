using Viangnua.Web.Data.Models.Views.Enum;

namespace Viangnua.Web.Data.Models.Views.Cloth;

public class ClothView
{
    public int Id { get; set; }

    public string Name { get; set; }

    public ClothColorView ColorType { get; set; }
    
    public QualityTypeView QualityType { get; set; }
    
    public GenderTypeView GenderType { get; set; }
    
    public bool IsAdult { get; set; }
    
    public string Size { get; set; }
}