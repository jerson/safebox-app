package dev.jerson.safebox

import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.support.wearable.activity.WearableActivity
import android.view.View
import android.widget.Toast
import dev.jerson.safebox.grpc.Client
import kotlinx.android.synthetic.main.login_activity.*

class LoginActivity : WearableActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.login_activity)

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            txtUsername.setAutofillHints(View.AUTOFILL_HINT_USERNAME)
            txtPassword.setAutofillHints(View.AUTOFILL_HINT_PASSWORD)
        }

        btnLogin.setOnClickListener {
            val username = txtUsername.text.trim().toString();
            val password = txtPassword.text.trim().toString();

            try {
                Client.connect().loginPremium(username, password);

                txtPassword.setText("")

                val intent = Intent(this@LoginActivity, AccountsActivity::class.java)
                startActivity(intent)

            } catch (e: Exception) {
                Toast.makeText(this@LoginActivity, e.message, Toast.LENGTH_LONG).show()

            }

        }

        setAmbientEnabled()
    }
}
