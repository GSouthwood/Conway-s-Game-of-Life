using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Life.Models;

namespace Life.Tests.Models
{
    [TestClass]
    public class GridTest
    {

        [TestMethod]
        public void AliveOrDeadTest()
        {
            //Arrange
            Grid grid = new Grid()
            {
                Rows = 6,
                Columns = 8,
                
            };
            Random rnd = new Random();
            //Act
            string result = Grid.AliveOrDead(rnd);

            //Assert
            Assert.AreEqual(true, result == "alive" || result == "dead");

        }
        
    }
}
