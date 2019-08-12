package dev.jerson.safebox.watch

import android.os.Bundle
import android.support.wearable.activity.WearableActivity
import android.view.View
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import dev.jerson.safebox.watch.adapters.AccountAdapter
import dev.jerson.safebox.watch.grpc.Client
import kotlinx.android.synthetic.main.activity_accounts.*
import org.jetbrains.anko.doAsync
import org.jetbrains.anko.uiThread

class AccountsActivity : WearableActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_accounts)

        load()

        setAmbientEnabled()
    }

    private fun load() {

        progressBar.visibility = View.VISIBLE
        list.visibility = View.GONE

        doAsync {
            try {
                val accounts = Client.connect().accounts

                uiThread {
                    list.visibility = View.VISIBLE
                    progressBar.visibility = View.GONE
                    list.layoutManager = LinearLayoutManager(this@AccountsActivity) as RecyclerView.LayoutManager?
                    list.adapter = AccountAdapter(accounts, this@AccountsActivity)

                }

            } catch (e: Exception) {
                Toast.makeText(this@AccountsActivity, e.message, Toast.LENGTH_LONG).show()
            }
        }
    }
}
