using Demo.TestPlayer.Web.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Demo.TestPlayer.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Display()
        {
            return View();
        }

        public ActionResult Resolution()
        {
            return View();
        }

        public ActionResult Bitrate()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetSource()
        {
            var result = ConstantValue.Default_Url;
            return Json(new { data = result }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}