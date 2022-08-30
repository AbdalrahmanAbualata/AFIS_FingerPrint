using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AFIS_FingerPrint.Models
{
    public class ApiResult
    {

        public object Data { set; get; }
        public string ErrorMessage { set; get; }
        public bool IsError { set; get; }

    }
}