﻿using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Image { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
    }
}
