using System.Collections.Generic;

namespace Api.Shopping.Catalogue.Models
{
    public class Product: BaseModel
    {
        public string Name { get; set; }
        public ProductDescription Description { get; set; }
        public double Price { get; set; }
        public double SalePrice { get; set; }
        public ProductPhoto ProductPhoto { get; set; }
        public double Quantity { get; set; }
        public bool OnSale { get; set; }
        public ProductType ProductType { get; set; }
        public bool IsFeatured { get; set; }
        public IEnumerable<ProductSize> Sizes { get; set; }
        public string ProductKey { get; set; }
    }

    public class ProductDescription
    {
        public string Text { get; set; }
        public string Colour { get; set; }
        public string Alert { get; set; }
    }

    public class ProductPhoto
    {
        public string Name { get; set; }
        public int Extra { get; set; }
    }

    public class ProductSize
    {
        public string Value { get; set; }
        public bool IsSelected { get; set; }
    }

    public enum ProductType
    {
        Accessories,
        Denim,
        Footwear,
        Jeans,
        Outerwear,
        Pants,
        Shirts,
        TShirts,
        Shorts,
        Featured
    }
}
