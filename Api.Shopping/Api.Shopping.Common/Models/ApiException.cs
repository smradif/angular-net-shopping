using System;

namespace Api.Shopping.Common.Models
{
    public class ApiException : Exception
    {
        public ApiException(string message, Exception innerException) : base(message, innerException)
        {
        }

        public ApiException(string message, Exception innerException, bool notifyUi) : base(message, innerException)
        {
            NotifyUi = notifyUi;
        }

        public ApiException(string message, bool notifyUi = false) : base(message)
        {
            NotifyUi = notifyUi;
        }

        public bool NotifyUi { get; set; }
    }
}
