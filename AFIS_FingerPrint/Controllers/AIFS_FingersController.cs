using AFIS_FingerPrint.Models;
using Newtonsoft.Json;
using Sample.Segmentation.Modilty;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace AFIS_FingerPrint.Controllers
{
    public class AIFS_FingersController : Controller
    {
        // GET: AIFS_Fingers
        public ActionResult DecimalFingerPrint()
        {
            return View();
        }

        public ActionResult OpenModelPopup(int TYPE_ID)
        {
            return View();
        }

         

        [HttpPost]
        public ActionResult Save_Images_FingerPrint(string base64imageObj , string CASE_ID)
        {
            ApiResult oApi = new ApiResult();
            List<string> ImageListRightHand = new List<string>();
            List<string> ImageListLeftHand = new List<string>();
            List<string> Errror = new List<string>();
            Hand handObj = JsonConvert.DeserializeObject<Hand>(base64imageObj);
            if(handObj.Position == Hand.HandPositionEnum.RightHand)
            {

                for (int i = 0; i < handObj.Fingerprints.Count; i++)
                {
                    var ImageByte = handObj.Fingerprints[i].Image.DataBytes;


                    try
                    {

                        var strPathTest = @"C:\Users\admin\Desktop\IMAGES_FACE";
                         
                        var ImageName = CASE_ID + "_" +  handObj.Fingerprints[i].Position + ".bmp";
                        string imgPath = Path.Combine(strPathTest, ImageName);

                        using (var ms = new MemoryStream(ImageByte))
                        {
                            System.Drawing.Image image = System.Drawing.Image.FromStream(ms);
                            image.Save(imgPath, ImageFormat.Bmp);
                            image.Dispose();
                            ImageListRightHand.Add(imgPath);
                            var RetrunFullPath = imgPath;
                         //return RetrunFullPath;
                        }




                    }
                    catch (Exception ex)
                    {
                         Errror.Add(ex.Message);
                        return Json(Errror.ToList(), JsonRequestBehavior.AllowGet); 
                    }

                }

                return Json(ImageListRightHand.ToList(), JsonRequestBehavior.AllowGet);

            }
            else if (handObj.Position == Hand.HandPositionEnum.LeftHand)
            {

                for (int i = 0; i < handObj.Fingerprints.Count; i++)
                {
                    var ImageByte = handObj.Fingerprints[i].Image.DataBytes;


                    try
                    {

                        var strPathTest = @"C:\Users\admin\Desktop\IMAGES_FACE";
                         
                        var ImageName = CASE_ID + "_" + handObj.Fingerprints[i].Position + ".bmp";
                        string imgPath = Path.Combine(strPathTest, ImageName);

                        using (var ms = new MemoryStream(ImageByte))
                        {
                            System.Drawing.Image image = System.Drawing.Image.FromStream(ms);
                            image.Save(imgPath, ImageFormat.Bmp);
                            image.Dispose();
                            ImageListLeftHand.Add(imgPath);
                            var RetrunFullPath = imgPath;
                            // return RetrunFullPath;
                        }

                         


                    }
                    catch (Exception ex)
                    {
                        Errror.Add(ex.Message);
                        return Json(Errror.ToList(), JsonRequestBehavior.AllowGet);
                    }

                }

                return Json(ImageListLeftHand.ToList(), JsonRequestBehavior.AllowGet);
            }
            else
            {


                for (int i = 0; i < handObj.Fingerprints.Count; i++)
                {
                    var ImageByte = handObj.Fingerprints[i].Image.DataBytes;


                    try
                    {

                        var strPathTest = @"C:\Users\admin\Desktop\IMAGES_FACE";

                        var ImageName = CASE_ID + "_" + handObj.Fingerprints[i].Position + ".bmp";
                        string imgPath = Path.Combine(strPathTest, ImageName);

                        using (var ms = new MemoryStream(ImageByte))
                        {
                            System.Drawing.Image image = System.Drawing.Image.FromStream(ms);
                            image.Save(imgPath, ImageFormat.Bmp);
                            image.Dispose();
                            ImageListLeftHand.Add(imgPath);
                            var RetrunFullPath = imgPath;
                            // return RetrunFullPath;
                        }




                    }
                    catch (Exception ex)
                    {
                        Errror.Add(ex.Message);
                        return Json(Errror.ToList(), JsonRequestBehavior.AllowGet);
                    }

                }

                return Json(ImageListLeftHand.ToList(), JsonRequestBehavior.AllowGet);

            }

        } 

    }
}