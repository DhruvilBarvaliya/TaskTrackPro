using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Npgsql;
using TaskTrackPro.Core.Models;
using TaskTrackPro.Core.Repositories.Commands.Interfaces;

namespace TaskTrackPro.Core.Repositories.Queries.Implementations
{
    public class UserLoginRepository : IUserLoginInterface
    {
        private readonly NpgsqlConnection _conn;

        public UserLoginRepository(NpgsqlConnection connection)
        {
            _conn = connection;
        }

        public async Task<t_User> login(t_Login login)
        {
            t_User tt = null;
            try
            {
                await _conn.OpenAsync();
                string qry = "SELECT * FROM t_user_task WHERE c_email=@c_email";
                using var cmd = new NpgsqlCommand(qry, _conn);
                cmd.Parameters.AddWithValue("@c_email", login.Email);

                using var dr = await cmd.ExecuteReaderAsync();
                if (dr.HasRows)
                {
                    while (await dr.ReadAsync())
                    {
                        tt = new t_User
                        {
                            c_uid = Convert.ToInt32(dr["c_uid"]),
                            c_uname = dr["c_uname"].ToString(),
                            c_email = dr["c_email"].ToString(),
                            c_password = dr["c_password"].ToString(), 
                            c_gender = dr["c_gender"].ToString(),
                            c_approve_status = (bool)dr["c_approve_status"],
                            c_profilepicture = dr["c_profilepicture"].ToString()
                        };
                    }

                    if (tt != null && BCrypt.Net.BCrypt.Verify(login.Password, tt.c_password))
                    {
                        return tt; 
                    }
                }

                return null;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error while login: " + ex.Message);
                return null;
            }
            finally
            {
                await _conn.CloseAsync();
            }
        }

        // public async Task<t_User> Login(t_Login user)
        // {
        //     try
        //     {
        //         await _conn.OpenAsync();
        //         t_User userData = new t_User();
        //         NpgsqlCommand cmd = new NpgsqlCommand("Select *from t_user_task where c_email=@Email AND c_password=@Password", _conn);
        //         cmd.Parameters.AddWithValue("@Email", user.Email);
        //         cmd.Parameters.AddWithValue("@Password", user.Password);

        //         NpgsqlDataReader reader = cmd.ExecuteReader();

        //         if(!reader.HasRows)
        //         {
        //             return null;
        //         }
        //         else
        //         {
        //             while(reader.Read())
        //             {
        //                 userData.c_uid = (int)reader["c_uid"];
        //                 userData.c_uname = reader["c_uname"].ToString();
        //                 userData.c_email = reader["c_email"].ToString();
        //                 userData.c_password = reader["c_password"].ToString();
        //                 userData.c_gender = reader["c_gender"].ToString();
        //                 userData.c_profilepicture = reader["c_profilepicture"].ToString();
        //                 userData.c_approve_status = (bool)reader["c_approve_status"]; 
        //             }
        //         }

        //         return userData;
        //     }
        //     catch(Exception ex)
        //     {
        //         Console.WriteLine($"Error in Login method of IUserLoginRepository file {ex.Message}");
        //         return null;
        //     }
        //     finally{
        //         await _conn.CloseAsync();
        //     }
        // }

        public List<User_List> GetUsers()
        {
            try
            {
                List<User_List> users = new List<User_List>();
                NpgsqlCommand cmd = new NpgsqlCommand("select c_uid, c_uname from t_user_task where c_approve_status=@Status", _conn);
                _conn.Close();
                cmd.Parameters.AddWithValue("@Status", true);
                _conn.Open();

                NpgsqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    User_List user = new User_List();
                    user.UserId = (int)reader["c_uid"];
                    user.UserName = reader["c_uname"].ToString();

                    users.Add(user);
                }

                return users;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in GetUsers method of IUserLoginRepository file {ex.Message}");
                return null;
            }
        }
    }
}