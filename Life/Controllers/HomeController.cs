using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Life.Models;

namespace Life.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(Grid grid)
        {
            //default size
            if (grid.Rows == 0 || grid.Columns == 0) 
            {


                grid.Rows = 6;
                grid.Columns = 8;

                
            }
            

            

            return View(grid);
        }

    }
}