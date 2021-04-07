using System;

namespace Api.Shopping.Common.Interfaces
{
    public interface ILoggerService
    {
        void Log(Exception error);
        void Warn(string error);
        void Info(string error);
    }
}
