using Demo.TestPlayer.Web.Common;
using Demo.TestPlayer.Web.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
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
            var list = new List<VideoModel>()
            {
                new VideoModel { Poster = "", Url = "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.720p.webm", Type="video/webm" },
                new VideoModel { Poster = "", Url = "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.720p.webm", Type="video/webm" },
                new VideoModel { Poster = "", Url = "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.720p.webm", Type="video/webm" },
                new VideoModel { Poster = "", Url = "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.720p.webm", Type="video/webm" }
            };
            
            return View(list);
        }

        public ActionResult Bitrate()
        {
            return View();
        }
        public ActionResult HlsTest()
        {
            return View();
        }

        //[HttpPost]
        //public ActionResult HlsTests()
        //{
        //    ProcessStartInfo startInfo = new ProcessStartInfo();
        //    startInfo.CreateNoWindow = false;
        //    startInfo.UseShellExecute = false;
        //    startInfo.FileName = Path.Combine(@"C:\ffmpeg", "ffmpeg.exe");

        //    //????????

        //    startInfo.Arguments = "ffmpeg -i http://192.168.2.181:8084/Videos/indexes/index.m3u8 -c copy -bsf:a aac_adtstoasc C://earth.mp4";

        //    //????????

        //    startInfo.RedirectStandardOutput = true;

        //    try
        //    {
        //        using (Process process = Process.Start(startInfo))
        //        {
        //            process.WaitForExit();
        //        }

        //    }
        //    catch (Exception ex)
        //    {

        //        throw;
        //    }
        //    return RedirectToAction("HlsTest");
        //}

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