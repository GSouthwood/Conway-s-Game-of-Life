using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Life.Models
{
    public class Grid
    {
        public int Rows { get; set; }
        public int Columns { get; set; }

        public static string AliveOrDead(Random rnd)
        {
            
                int num = rnd.Next(1, 100);
            if (num <= 50)
            {
                return "alive";
            }
            else
            {
                return "dead";
            }
        }


    }
}