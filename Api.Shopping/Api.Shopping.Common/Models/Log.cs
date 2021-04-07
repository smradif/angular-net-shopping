using System;

namespace Api.Shopping.Common.Models
{
    public class Log
    {
        public Exception Exception { get; set; }
        public string Message { get; set; }
        public ErrorLevel ErrorLevel { get; set; }
    }

    public enum ErrorLevel
    {
        Error,
        Warn,
        Info
    }
}
