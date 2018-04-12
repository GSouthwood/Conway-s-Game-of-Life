using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Life.Models;

namespace Life.Controllers
{
    public class TestsController : Controller
    {
        // GET: Tests
        public ActionResult Index(string id)
        {
         
            Grid grid1 = new Grid();
                grid1.Rows = 3;
                grid1.Columns = 3;
            
            Grid grid2 = new Grid();
                grid2.Rows = 6;
                grid2.Columns = 8;

            if (String.IsNullOrEmpty(id))
            {
                return View(grid1);
            }
            else
            {
                return View(grid2);
            }
            
        }
        
    }
}