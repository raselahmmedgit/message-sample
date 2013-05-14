using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RnD.MessSample.Models;

namespace RnD.MessSample.ViewModels
{
    public class ProductViewModel
    {
        public string ProductId { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public string CategoryId { get; set; }
        public string CategoryName { get; set; }

        public IEnumerable<SelectListItem> ddlCategories { get; set; }
    }
}