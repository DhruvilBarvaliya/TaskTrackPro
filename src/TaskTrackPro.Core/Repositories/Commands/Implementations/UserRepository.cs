using Npgsql;
using TaskTrackPro.Repositories.Interfaces;
using TaskTrackPro.Core.Models;
using BCrypt.Net;

public class UserRepository : IUserInterface
{
    private readonly NpgsqlConnection _conn;
    public UserRepository(NpgsqlConnection connection)
    {
        _conn = connection;
    }
    // public async Task<t_User> Login(t_Login user)
    // {
    //     t_User UserData = new t_User();
    //     var qry = "SELECT * FROM t_user_task WHERE c_email=@c_email AND c_password=@c_password;";
    //     try
    //     {
    //         using (NpgsqlCommand cmd = new NpgsqlCommand(qry, _conn))
    //         {
    //             cmd.Parameters.AddWithValue("@c_email", user.Email);
    //             cmd.Parameters.AddWithValue("@c_password", user.Password);
    //             await _conn.OpenAsync();
    //             var reader = await cmd.ExecuteReaderAsync();
    //             if (reader.Read())
    //             {
    //                 UserData.c_uid = (int)reader["c_uid"];
    //                 UserData.c_email = (string)reader["c_email"];
    //                 UserData.c_uname = (string)reader["c_uname"];
    //                 UserData.c_password = (string)reader["c_password"];
    //                 UserData.c_profilepicture = (string)reader["c_profilepicture"];
    //             }
    //         }
    //     }
    //     catch (Exception e)
    //     {
    //         Console.WriteLine("----------->Login Error : " + e.Message);
    //     }
    //     finally
    //     {
    //         await _conn.CloseAsync();
    //     }
    //     return UserData;
    // }


public async Task<t_User> Login(t_Login user)
{
    t_User UserData = null;
    var qry = "SELECT * FROM t_user_task WHERE c_email=@c_email;";
    
    try
    {
        using (NpgsqlCommand cmd = new NpgsqlCommand(qry, _conn))
        {
            cmd.Parameters.AddWithValue("@c_email", user.Email);
            await _conn.OpenAsync();
            
            using (var reader = await cmd.ExecuteReaderAsync())
            {
                if (await reader.ReadAsync())
                {
                    string storedHashedPassword = (string)reader["c_password"];
                    
                    // Verify the input password against the stored hash
                    if (BCrypt.Net.BCrypt.Verify(user.Password, storedHashedPassword))
                    {
                        UserData = new t_User
                        {
                            c_uid = (int)reader["c_uid"],
                            c_email = (string)reader["c_email"],
                            c_uname = (string)reader["c_uname"],
                            c_password = storedHashedPassword, // Store only if necessary
                            c_profilepicture = (string)reader["c_profilepicture"]
                        };
                    }
                }
            }
        }
    }
    catch (Exception e)
    {
        Console.WriteLine("-----------> Login Error: " + e.Message);
    }
    finally
    {
        await _conn.CloseAsync();
    }
    
    return UserData;
}


    // public async Task<int> Add(t_User userData)
    // {
    //     var qry = "Insert into t_user_task (c_uname, c_email,c_gender,c_password,c_profilepicture) values (@c_uname, @c_email,@c_gender,@c_password,@c_profilepicture)";

    //     try
    //     {
    //         using (NpgsqlCommand cmd = new NpgsqlCommand(qry, _conn))
    //         {
    //             cmd.Parameters.AddWithValue("@c_uname", userData.c_uname);
    //             cmd.Parameters.AddWithValue("@c_email", userData.c_email);
    //             cmd.Parameters.AddWithValue("@c_password", userData.c_password);
    //             cmd.Parameters.AddWithValue("@c_gender", userData.c_gender);
    //             cmd.Parameters.AddWithValue("@c_profilepicture", userData.c_profilepicture ?? (object)DBNull.Value);

    //             _conn.Close();
    //             _conn.Open();
    //             cmd.ExecuteNonQuery();
    //             _conn.Close();

    //             return 1;
    //         }
    //     }
    //     catch (Exception e)
    //     {
    //         Console.WriteLine("-----fuck----->Login Error : " + e.Message);
    //         return -1;

    //     }
    //     finally
    //     {
    //         await _conn.CloseAsync();
    //     }

    // }

    public async Task<int> Add(t_User userData)
    {
        var qry = "Insert into t_user_task (c_uname, c_email, c_gender, c_password, c_profilepicture) values (@c_uname, @c_email, @c_gender, @c_password, @c_profilepicture)";

        try
        {
            using (NpgsqlCommand cmd = new NpgsqlCommand(qry, _conn))
            {
                string hashedPassword = BCrypt.Net.BCrypt.HashPassword(userData.c_password); // Hashing password

                cmd.Parameters.AddWithValue("@c_uname", userData.c_uname);
                cmd.Parameters.AddWithValue("@c_email", userData.c_email);
                cmd.Parameters.AddWithValue("@c_gender", userData.c_gender);
                cmd.Parameters.AddWithValue("@c_password", hashedPassword); // Store hashed password
                cmd.Parameters.AddWithValue("@c_profilepicture", userData.c_profilepicture ?? (object)DBNull.Value);

                _conn.Open();
                cmd.ExecuteNonQuery();
                _conn.Close();

                return 1;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Login Error: " + e.Message);
            return -1;
        }
        finally
        {
            await _conn.CloseAsync();
        }
    }
    public async Task<t_User> GetUser(int userid)
    {
        t_User UserData = new t_User();
        var qry = "SELECT * FROM t_user_task WHERE c_uid=@c_uid;";
        try
        {
            using (NpgsqlCommand cmd = new NpgsqlCommand(qry, _conn))
            {
                cmd.Parameters.AddWithValue("@c_uid", userid);
                await _conn.OpenAsync();
                var reader = await cmd.ExecuteReaderAsync();
                if (reader.Read())
                {
                    UserData.c_uid = (int)reader["c_uid"];
                    UserData.c_email = (string)reader["c_email"];
                    UserData.c_uname = (string)reader["c_uname"];
                    UserData.c_password = (string)reader["c_password"];
                    UserData.c_profilepicture = (string)reader["c_profilepicture"];
                }
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("----------->Login Error : " + e.Message);
        }
        finally
        {
            await _conn.CloseAsync();
        }
        return UserData;
    }

    public async Task<int> UpdateProfile(t_User userData)
    {
        var qry = "UPDATE t_user_task SET c_uname=@c_uname, c_email=@c_email,c_profilepicture=@profile_image WHERE c_uid = @c_uid";
        try
        {
            using (NpgsqlCommand cmd = new NpgsqlCommand(qry, _conn))
            {
                _conn.Close();
                cmd.Parameters.AddWithValue("@c_uname", userData.c_uname);
                cmd.Parameters.AddWithValue("@c_email", userData.c_email);
                cmd.Parameters.AddWithValue("@profile_image", userData.c_profilepicture.ToString());
                cmd.Parameters.AddWithValue("@c_uid", userData.c_uid);
                _conn.Open();
                int rowsAffected = await cmd.ExecuteNonQueryAsync();
                return 1;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Error updating profile: " + e.Message);
        }
        return 0;
    }

    public async Task<int> ChangePassword(t_User userData)
    {
        var qry = "UPDATE t_user_task SET c_password = @c_password WHERE c_uid = @c_uid";
        try
        {
            using (NpgsqlCommand cmd = new NpgsqlCommand(qry, _conn))
            {
                cmd.Parameters.AddWithValue("@c_password", userData.c_password);
                cmd.Parameters.AddWithValue("@c_uid", userData.c_uid);

                _conn.Close();
                _conn.Open();
                int rowsAffected = await cmd.ExecuteNonQueryAsync();
                _conn.Close();
                return 1;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Error changing password: " + e.Message);
        }
        return 0;
    }


    public async Task<t_User> GetUserByEmail(string email)
    {
        t_User user = null;
        var qry = "SELECT * FROM t_user_task WHERE c_email = @c_email;";
        try
        {
            using (NpgsqlCommand cmd = new NpgsqlCommand(qry, _conn))
            {
                cmd.Parameters.AddWithValue("@c_email", email);
                await _conn.OpenAsync();
                var reader = await cmd.ExecuteReaderAsync();
                if (reader.Read())
                {
                    user = new t_User
                    {
                        c_uid = (int)reader["c_uid"],
                        c_uname = reader["c_uname"].ToString(),
                        c_email = reader["c_email"].ToString(),
                        c_password = reader["c_password"].ToString(),
                        c_profilepicture = reader["c_profilepicture"].ToString()
                    };
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error fetching user by email: " + ex.Message);
        }
        finally
        {
            await _conn.CloseAsync();
        }
        return user;
    }


}