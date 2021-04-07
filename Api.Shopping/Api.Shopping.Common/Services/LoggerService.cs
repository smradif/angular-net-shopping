using Api.Shopping.Common.Interfaces;
using Api.Shopping.Common.Models;
using System;

namespace Api.Shopping.Common.Services
{
    public class LoggerService : BaseService, ILoggerService
    {
        private readonly CommonSettings settings;

        public LoggerService(CommonSettings settings)
        {
            this.settings = settings;
        }

        public void Log(Exception error)
        {
            var log = new Log { Exception = error, ErrorLevel = ErrorLevel.Error };
            Log(log);
        }

        public void Warn(string error)
        {
            var log = new Log { Message = error, ErrorLevel = ErrorLevel.Warn };
            Log(log);
        }

        public void Info(string error)
        {
            var log = new Log { Message = error, ErrorLevel = ErrorLevel.Info };
            Log(log);
        }

        private void Log(Log log)
        {
            if (settings.IsDevelopment)
            {

            }
        }
    }
}
