using Viangnua.Web.Data.Models.Entities.Enum;

namespace Viangnua.Web.Extension;

public static class EnumExtension
{
    public static string MapToName(this ClothColor c)
    {
        return c switch
        {
            ClothColor.None => nameof(ClothColor.None),
            ClothColor.Red => nameof(ClothColor.Red),
            ClothColor.Blue => nameof(ClothColor.Blue),
            ClothColor.Green => nameof(ClothColor.Green),
            _ => throw new ArgumentOutOfRangeException(nameof(c), c, null)
        };
    }

    public static string MapToName(this GenderType g)
    {
        return g switch
        {
            GenderType.NotSpecified => nameof(GenderType.NotSpecified),
            GenderType.None => nameof(GenderType.None),
            GenderType.Female => nameof(GenderType.Female),
            GenderType.Male => nameof(GenderType.Male),
            _ => throw new ArgumentOutOfRangeException(nameof(g), g, null)
        };
    }

    public static string MapToName(this QualityType q)
    {
        return q switch
        {
            QualityType.None => nameof(QualityType.None),
            QualityType.Cheap => nameof(QualityType.Cheap),
            QualityType.Expensive => nameof(QualityType.Expensive),
            _ => throw new ArgumentOutOfRangeException(nameof(q), q, null)
        };
    }
}