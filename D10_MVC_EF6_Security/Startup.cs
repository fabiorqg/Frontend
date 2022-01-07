using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(D10_MVC_EF6_Security.Startup))]
namespace D10_MVC_EF6_Security
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
