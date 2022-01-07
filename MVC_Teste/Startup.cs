using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_Teste.Startup))]
namespace MVC_Teste
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
