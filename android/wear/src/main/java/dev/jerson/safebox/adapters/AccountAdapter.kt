package dev.jerson.safebox.adapters

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import dev.jerson.safebox.R
import kotlinx.android.synthetic.main.account_item.view.*
import safebox.AccountSingleCollection

class AccountAdapter(val items: AccountSingleCollection, val context: Context) : RecyclerView.Adapter<AccountViewHolder>() {
    override fun onBindViewHolder(holder: AccountViewHolder, position: Int) {
        val account = items.at(position.toLong())
        holder.name?.text = account.label
        holder.username?.text = account.username
        if (account.hint.isEmpty()) {
            holder.hint?.visibility = View.GONE
        } else {
            holder.hint?.text = "Hint: ${account.hint}"
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AccountViewHolder {
        return AccountViewHolder(
            LayoutInflater.from(context).inflate(
                R.layout.account_item,
                parent,
                false
            )
        )
    }

    override fun getItemCount(): Int {
        return items.count().toInt()
    }

}

class AccountViewHolder(view: View) : RecyclerView.ViewHolder(view) {
    val name = view.name
    val username = view.username
    val hint = view.hint
}