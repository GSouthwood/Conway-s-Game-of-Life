using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Life;
using Life.Controllers;
using Life.Models;

namespace Life.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            Grid grid = new Grid();
            ViewResult result = controller.Index(grid) as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void IndexTestNoId()
        {
            // Arrange
            TestsController controller = new TestsController();

            // Act
            string id = "";
            ViewResult result = controller.Index(id) as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void IndexTestWithId()
        {
            // Arrange
            TestsController controller = new TestsController();

            // Act
            string id = "testtwo";
            ViewResult result = controller.Index(id) as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }

    }
}
